import { useEffect, useMemo, useState } from 'react';
import { projects } from '../config/projects';
import { supabase } from '../data/supabase';

const accountApps = projects.filter((project) => project.status === 'live' && !project.disabled);

function errorMessage(error) {
  const text = error?.message || '';
  const code = error?.code || '';
  if (text.toLowerCase().includes('already registered')) return '이미 가입된 이메일입니다. 로그인해 주세요.';
  if (text.toLowerCase().includes('invalid login')) return '이메일 또는 비밀번호를 확인해 주세요.';
  if (code === 'email_not_confirmed' || text.toLowerCase().includes('email not confirmed')) return '이메일 인증을 먼저 완료해 주세요.';
  if (code === 'over_email_send_rate_limit' || text.toLowerCase().includes('rate limit')) return '인증 메일 요청이 많습니다. 잠시 후 다시 시도해 주세요.';
  if (text.toLowerCase().includes('password')) return '비밀번호는 8자 이상으로 입력해 주세요.';
  return text || '잠시 후 다시 시도해 주세요.';
}

const accountUrl = () => new URL('./account.html', window.location.href).href;

export default function Account() {
  const [mode, setMode] = useState('signup');
  const [session, setSession] = useState(null);
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [recoveryMode, setRecoveryMode] = useState(false);
  const [notice, setNotice] = useState({ text: '', error: false });

  const signedInEmail = useMemo(() => session?.user?.email || '', [session]);

  useEffect(() => {
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setSession(data.session || null);
      setReady(true);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((event, nextSession) => {
      setSession(nextSession);
      setReady(true);
      if (event === 'PASSWORD_RECOVERY') setRecoveryMode(true);
    });
    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  async function handleSignup(event) {
    event.preventDefault();
    if (password !== passwordConfirm) {
      setNotice({ text: '비밀번호가 서로 다릅니다.', error: true });
      return;
    }
    setBusy(true);
    setNotice({ text: '', error: false });
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: { emailRedirectTo: accountUrl() },
    });
    setBusy(false);
    if (error) {
      setNotice({ text: errorMessage(error), error: true });
      return;
    }
    setPassword('');
    setPasswordConfirm('');
    if (data.session) {
      setNotice({ text: 'Lumloom 계정을 만들고 로그인했습니다.', error: false });
    } else {
      setNotice({
        text: '인증 메일을 보냈습니다. 이메일의 인증 링크를 누른 뒤 Lumloom 앱에서 로그인해 주세요.',
        error: false,
      });
    }
  }

  async function handlePasswordResetRequest() {
    if (!email.trim()) {
      setNotice({ text: '비밀번호를 재설정할 이메일을 먼저 입력해 주세요.', error: true });
      return;
    }
    setBusy(true);
    setNotice({ text: '', error: false });
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: accountUrl(),
    });
    setBusy(false);
    if (error) {
      setNotice({ text: errorMessage(error), error: true });
      return;
    }
    setNotice({ text: '비밀번호 재설정 메일을 보냈습니다. 이메일을 확인해 주세요.', error: false });
  }

  async function handleLogin(event) {
    event.preventDefault();
    setBusy(true);
    setNotice({ text: '', error: false });
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    setBusy(false);
    if (error) {
      setNotice({ text: errorMessage(error), error: true });
      return;
    }
    setPassword('');
    setNotice({ text: '로그인했습니다.', error: false });
  }

  async function handlePasswordChange(event) {
    event.preventDefault();
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setBusy(false);
    if (error) {
      setNotice({ text: errorMessage(error), error: true });
      return;
    }
    setNewPassword('');
    setRecoveryMode(false);
    setNotice({ text: 'Lumloom 공용 비밀번호를 변경했습니다.', error: false });
  }

  async function handleSignOut() {
    setBusy(true);
    const { error } = await supabase.auth.signOut({ scope: 'local' });
    setBusy(false);
    if (error) setNotice({ text: errorMessage(error), error: true });
    else setNotice({ text: '이 브라우저에서 로그아웃했습니다.', error: false });
  }

  return (
    <main className="account-page">
      <section className="account-intro">
        <p className="section-eyebrow">Lumloom Account</p>
        <h1>하나의 계정으로,<br />기록을 이어보세요.</h1>
        <p>
          같은 이메일과 비밀번호로 Lumloom 앱에 로그인하면 데스크탑, 아이패드,
          아이폰에서 기록을 이어서 사용할 수 있습니다.
        </p>
      </section>

      <section className="account-panel" aria-live="polite">
        {!ready ? (
          <p className="account-loading">계정 정보를 확인하고 있습니다…</p>
        ) : session ? (
          <div className="account-signed-in">
            {recoveryMode && (
              <div className="account-recovery-callout">
                <strong>새 비밀번호를 설정해 주세요.</strong>
                <p>이메일의 재설정 링크가 확인되었습니다. 아래에서 새 비밀번호를 저장하면 모든 Lumloom 앱에서 사용할 수 있습니다.</p>
              </div>
            )}
            <div className="account-session-heading">
              <div><span>로그인한 계정</span><strong>{signedInEmail}</strong></div>
              <button type="button" onClick={handleSignOut} disabled={busy}>로그아웃</button>
            </div>

            <div className="account-apps">
              <p>사용할 앱을 선택하세요.</p>
              <div>
                {accountApps.map((project) => (
                  <a key={project.id} href={project.url}>{project.title}<span>열기 →</span></a>
                ))}
              </div>
            </div>

            <details className="account-password-change" open={recoveryMode || undefined}>
              <summary>비밀번호 변경</summary>
              <form onSubmit={handlePasswordChange}>
                <label>
                  <span>새 비밀번호</span>
                  <input type="password" autoComplete="new-password" minLength={8} required value={newPassword} onChange={(event) => setNewPassword(event.target.value)} placeholder="8자 이상" />
                </label>
                <button type="submit" disabled={busy}>변경하기</button>
              </form>
            </details>
          </div>
        ) : (
          <>
            <div className="account-tabs" role="tablist" aria-label="계정 메뉴">
              <button type="button" role="tab" aria-selected={mode === 'signup'} className={mode === 'signup' ? 'active' : ''} onClick={() => { setMode('signup'); setNotice({ text: '', error: false }); }}>계정 만들기</button>
              <button type="button" role="tab" aria-selected={mode === 'login'} className={mode === 'login' ? 'active' : ''} onClick={() => { setMode('login'); setNotice({ text: '', error: false }); }}>로그인</button>
            </div>

            <form className="account-form" onSubmit={mode === 'signup' ? handleSignup : handleLogin}>
              <label>
                <span>이메일</span>
                <input type="email" inputMode="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" />
              </label>
              <label>
                <span>비밀번호</span>
                <input type="password" autoComplete={mode === 'signup' ? 'new-password' : 'current-password'} minLength={8} required value={password} onChange={(event) => setPassword(event.target.value)} placeholder="8자 이상" />
              </label>
              {mode === 'signup' && (
                <label>
                  <span>비밀번호 확인</span>
                  <input type="password" autoComplete="new-password" minLength={8} required value={passwordConfirm} onChange={(event) => setPasswordConfirm(event.target.value)} placeholder="한 번 더 입력" />
                </label>
              )}
              <button type="submit" className="account-primary-button" disabled={busy}>
                {busy ? '처리 중…' : mode === 'signup' ? 'Lumloom 계정 만들기' : '로그인'}
              </button>
            </form>

            {mode === 'login' && (
              <button type="button" className="account-reset-button" onClick={handlePasswordResetRequest} disabled={busy}>
                비밀번호를 잊으셨나요?
              </button>
            )}

            <div className="account-caution">
              <strong>이메일 인증 안내</strong>
              <p>새 계정은 이메일 인증을 완료한 뒤 바로 사용할 수 있습니다. 아이폰 홈 화면 앱에서는 인증 후 같은 이메일과 비밀번호로 로그인해 주세요.</p>
            </div>
          </>
        )}

        {notice.text && <p className={`account-notice ${notice.error ? 'is-error' : ''}`}>{notice.text}</p>}
      </section>

      <p className="account-footnote">
        이메일은 Lumloom 계정 식별과 앱 기록 동기화에만 사용됩니다.
        앱의 기록은 계정별로 분리되어 저장됩니다.
      </p>
    </main>
  );
}
