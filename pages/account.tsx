import { useRouter } from "next/router";
import Account from "@/components/AccountComponent";
import MapboxMap from "@/components/MapboxMap";
import Header from "@/components/Header";

const AccountPage: React.FC = () => {
  const router = useRouter();
  const { username, email, profileImage } = router.query;

  return (
    <>
      <Header></Header>
      <Account
        username={username as string}
        email={email as string}
        profileImage={profileImage as string}
      />
      <MapboxMap />
    </>
  );
};

export default AccountPage;
