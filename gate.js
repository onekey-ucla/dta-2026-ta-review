(function () {
  const PASS = "TLC86";
  const KEY = "dta26-gate";
  try { if (sessionStorage.getItem(KEY) === "ok") return; } catch (e) {}

  document.documentElement.classList.add("dta-locked");
  const style = document.createElement("style");
  style.textContent = `
    html.dta-locked body > :not(#gate){display:none !important}
    #gate{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:24px;background:#f4f6f8;color:#17212b;font-family:"Public Sans",system-ui,-apple-system,"Segoe UI",sans-serif}
    #gate form{width:min(420px,100%);background:#fff;border:1px solid #dbe0e6;border-radius:10px;padding:28px 24px;display:flex;flex-direction:column;gap:14px}
    #gate .eyebrow{font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:#5a6573;font-weight:600}
    #gate h1{font-family:Newsreader,Georgia,"Times New Roman",serif;font-size:28px;font-weight:600;line-height:1.2;margin:0}
    #gate p{margin:0}
    #gate label{display:flex;flex-direction:column;gap:6px;font-size:13px;font-weight:700}
    #gate input{font:inherit;font-size:16px;font-weight:500;color:#17212b;background:#fff;border:2px solid #28598a;border-radius:8px;padding:8px 10px}
    #gate button{font:inherit;font-weight:600;border:1px solid #28598a;background:#28598a;color:#fff;border-radius:8px;padding:8px 14px;cursor:pointer}
    #gate .err{color:#ad2a22;font-weight:600;font-size:14px}
    @media (prefers-color-scheme: dark){
      #gate{background:#0f141a;color:#e5eaf0}
      #gate form{background:#161d25;border-color:#2a3440}
      #gate .eyebrow{color:#97a2b0}
      #gate input{color:#e5eaf0;background:#121820;border-color:#86b4e2}
      #gate button{background:#86b4e2;border-color:#86b4e2;color:#0f141a}
      #gate .err{color:#f2877f}
    }
  `;
  (document.head || document.documentElement).appendChild(style);

  function mount() {
    if (document.getElementById("gate")) return;
    const gate = document.createElement("div");
    gate.id = "gate";
    gate.innerHTML = `
      <form>
        <div class="eyebrow">Distinguished Teaching Award · Teaching Assistants · 2026</div>
        <h1>Enter the password</h1>
        <label>Password
          <input type="password" name="password" autocomplete="current-password" autofocus>
        </label>
        <button type="submit">Enter</button>
        <p class="err" hidden>That password is not correct.</p>
      </form>`;
    document.body.appendChild(gate);
    const form = gate.querySelector("form");
    const input = gate.querySelector("input");
    const err = gate.querySelector(".err");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (input.value.trim() !== PASS) {
        err.hidden = false;
        input.select();
        return;
      }
      try { sessionStorage.setItem(KEY, "ok"); } catch (e) {}
      document.documentElement.classList.remove("dta-locked");
      style.remove();
      gate.remove();
    });
    input.focus();
  }

  if (document.body) mount();
  else document.addEventListener("DOMContentLoaded", mount);
})();
