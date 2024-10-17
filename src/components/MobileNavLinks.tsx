import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to="/user-profile"
        className="flex bg-white font-bold hover:text-orange-500"
      >
        User profile
      </Link>
      <Button
        onClick={async () => await logout()}
        className="flex items-center px-3 font-bold hover:bg-gray-500"
      >
        Logout
      </Button>
    </>
  );
};

export default MobileNavLinks;
