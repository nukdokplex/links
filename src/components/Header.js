import './Header.css';

function Header(props) {
    const { avatarUrl, name, nickname, nicknameUrl, quote } = props;

    return (
        <div className="header d-flex flex-column align-items-center justify-content-center">
            <div className="text-center">
                <img src={avatarUrl || ""} alt={nickname + "'s avatar"} className="user-avatar img-fluid rounded-circle" />
                <h4 className="mt-3">{name}</h4>
                <a rel='noreferrer' target='_blank' href={nicknameUrl}>@{nickname}</a>
            </div>
            <div className="text-center mt-4">
                <blockquote className='blockquote'>
                    <p className='mb-0'>{quote}</p>
                </blockquote>
            </div>
        </div>
    );
}

export default Header;