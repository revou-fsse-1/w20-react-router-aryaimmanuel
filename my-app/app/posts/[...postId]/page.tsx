export default function PostDetail({ params }: { params: { postId: string } }) {
  return <div>PostDetail {params.postId[0]}</div>;
}
