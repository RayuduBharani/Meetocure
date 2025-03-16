import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export function Welcome() {
  return (
    <main className="w-screen h-lvh bg-black flex items-center justify-center">
      <div className="max-w-sm">
        <Link className="" to={"/login"}>
          <Button className="hover:cursor-pointer">Login</Button>
        </Link>
      </div>
    </main>
  );
}
