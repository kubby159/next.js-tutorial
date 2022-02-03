import { useRouter } from "next/router";
import Seo from "../../components/Seo";
export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];
  console.log(router);
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  //본래 getServerSideProps에서 fetch로 API를 가져왔으나
  //지금 같은 경우는 영화 제목을 이용해서 정보를 받아오고 있음.
  return {
    props: { params },
  };
}
