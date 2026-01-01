const Header = ({ userName, showExit, showAvatar, onExit }) => {
  return (
    <header className="flex justify-between py-4 px-[108px] border-b border-light items-center header">
      <div style={styles.logo}>
        <img src={`/images/logo.svg`} alt='Quiz Mania Logo' />
      </div>

      <div style={styles.right}>
        {showAvatar && (
          <div className="flex gap-4 items-center">
            <div style={styles.avatar}>
              {userName.charAt(0).toUpperCase()}
            </div>
            <h3>{userName}</h3>
          </div>
        )}

        {showExit && (
          <button onClick={onExit} className="text-primary border border-primary px-8 py-2 rounded-lg font-medium disabled:opacity-40 disabled:cursor-not-allowed">
            Exit Quiz
          </button>
        )}
      </div>
    </header>
  );
};

const styles = {
  logo: { fontSize: "20px", fontWeight: "bold" },
  right: { display: "flex", alignItems: "center", gap: "10px" },
  exitBtn: { padding: "6px 12px", cursor: "pointer" },
  avatar: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    background: "#ff9800",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold"
  }
};

export default Header;
