import { useRouter } from 'next/router';

const Article = () => {
  const router = useRouter();
  const { articleId } = router.query;

  // Dummy data for the article
  const articles = {
    1: { title: "Dynamic routing Article One", content: "This is the content of article one." },
    2: { title: "Dynamic routing Article Two", content: "This is the content of article two." },
    3: { title: "Dynamic routing Article Three", content: "This is the content of article three." },
  };

  const article = articles[articleId];

  if (!article) {
    return <h1>Article not found</h1>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;
