import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Loading from "../Loading/loading";
import { MdOutlineError } from "react-icons/md";

const Home = () => {
  const t = useTranslation();
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDark] = useContext();

  useEffect(() => {
    async function products() {
      try {
        setIsLoading(true);
        const res = await axios.get("https://https://dummyjson.com/posts");

        const cards = res.data.posts;

        console.log("pro", cards);
        setPost(cards);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    products();
  }, []);

  return (
    <>
      <div className={`${isDark ? "bg-black" : "bg-white"}`}>
        <div className="">
          {isLoading && (
            <div className="flex justify-center bg-white z-5x0 fleinset-0 bg-opacity-70">
              <div className="grid grid-cols-5 gap-[15px]">
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                <Loading />
              </div>
            </div>
          )}
          {error && (
            <div className="text-[50px] w-[800px] m-auto text-red-700 mt-[100px] h-[300px]">
              {error}
              <MdOutlineError className="m-auto text-[200px] text-red-700 animate-bounce my-[40px]" />
            </div>
          )}
        </div>
        <div className="">
          {post.map((item) => (
            <h2>{item.title}</h2>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
