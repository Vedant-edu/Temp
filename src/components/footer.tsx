const footerItems = [
  {
      id: 1,
      text: "Disclaimer  |",
      link: "disclaimer"
  },
  {
      id: 2,
      text: "Feedback",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScvUx9b7fSmMUZAqH5S_tkSrq13hlmL9EB7NmPm3BNMBGP8yA/viewform?usp=sf_link"
  }
];
interface FooterItemProps {
  id: number;
  text: string;
  link: string;
}

const FooterItem: React.FC<FooterItemProps> = ({ id, text, link }) => {
  return (
    <li key={id}>
      <a href={link} target={link.startsWith("http") ? "_blank" : ""} rel={link.startsWith("http") ? "noopener noreferrer" : ""}>
        {text}
      </a>
    </li>
  );
};

export default function Footer() {
  return (
    <>

      <footer className="m500:text-sm z-30 bg-bg px-5 py-5 text-center font-base">
        <div className="max-w-7xl mx-auto text-bold ml-0 px-6 lg:ml-auto text-center lg:text-left">Crafted with 💖 by<br />
          <a href="https://www.github.com/VedantMute/VedantMute" className="text-3xl text-gray-700 font-semibold">Vedant Mute</a>
        </div>
        <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center gap-y-5 py-3  px-6">
                    <p className="text-gray-700 ">
                        &copy; 2024 Make My Resume 
                    </p>
                    <nav>
                        <ul className="flex items-center gap-x-5 text-gray-800 ">
                            {
                                footerItems.map(footerItem => (
                                    <FooterItem key={footerItem.id} {...footerItem} />
                                ))
                            }
                        </ul>
                    </nav>
                </div>
      </footer>
    </>
  )
}
