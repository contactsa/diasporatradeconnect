
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Auth = () => {
  const handleSignIn = () => {
    window.location.href = "https://sellerafrica.com/login";
  };

  const handleGitHubLogin = () => {
    window.location.href = "https://sellerafrica.com/login";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-ivory to-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-terracotta">
          Welcome Back
        </h2>
        <Button
          onClick={handleSignIn}
          className="w-full bg-terracotta hover:bg-terracotta/90"
        >
          Sign In
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">Or continue with</span>
          </div>
        </div>
        <Button
          onClick={handleGitHubLogin}
          variant="outline"
          className="w-full"
          type="button"
        >
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>
    </div>
  );
};

export default Auth;
