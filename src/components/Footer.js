import './Footer.css';

function Footer(props) {
    const { copyrightText } = props;
    return (
        <div className='footer py-2 mt-2 text-center'>
            <p dangerouslySetInnerHTML={{__html: copyrightText}}></p>
        </div>
    );
}

export default Footer;