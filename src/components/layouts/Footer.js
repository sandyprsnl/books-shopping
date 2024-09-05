import { Footer as FbFooter } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
const Footer = () => {
    return (
        <FbFooter container className="max-w-screen-xl mx-auto ">
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <FbFooter.Brand
                            href="/"
                            src="https://flowbite.com/docs/images/logo.svg"
                            alt="Flowbite Logo"
                            name="Flowbite"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <FbFooter.Title title="about" />
                            <FbFooter.LinkGroup col>
                                <FbFooter.Link href="#">Flowbite</FbFooter.Link>
                                <FbFooter.Link href="#">Tailwind CSS</FbFooter.Link>
                            </FbFooter.LinkGroup>
                        </div>
                        <div>
                            <FbFooter.Title title="Follow us" />
                            <FbFooter.LinkGroup col>
                                <FbFooter.Link href="#">Github</FbFooter.Link>
                                <FbFooter.Link href="#">Discord</FbFooter.Link>
                            </FbFooter.LinkGroup>
                        </div>
                        <div>
                            <FbFooter.Title title="Legal" />
                            <FbFooter.LinkGroup col>
                                <FbFooter.Link href="#">Privacy Policy</FbFooter.Link>
                                <FbFooter.Link href="#">Terms &amp; Conditions</FbFooter.Link>
                            </FbFooter.LinkGroup>
                        </div>
                    </div>
                </div>
                <FbFooter.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <FbFooter.Copyright href="#" by="Flowbite™" year={2022} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <FbFooter.Icon href="#" icon={BsFacebook} />
                        <FbFooter.Icon href="#" icon={BsInstagram} />
                        <FbFooter.Icon href="#" icon={BsTwitter} />
                        <FbFooter.Icon href="#" icon={BsGithub} />
                        <FbFooter.Icon href="#" icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </FbFooter>

    )
}

export default Footer
