import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { HiDocumentAdd } from "react-icons/hi";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="" download="../assets/file/UceiifAliResume.pdf">
          <HiDocumentAdd />
        </a>
      </div>
      <div>
        <a href="https://github.com/uceiifali">
          <AiFillGithub />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/uceiif/">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/uceiifalii/">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
