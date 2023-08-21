import './Footer.css';

function Footer(props) {
    const { copyrightText } = props;
    return (
        <div className='footer py-4 mt-2 text-center'>
            <p className='mb-0' dangerouslySetInnerHTML={{__html: copyrightText}}></p>
        </div>
    );
}

export default Footer;