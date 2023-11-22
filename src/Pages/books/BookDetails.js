import { Link } from "react-router-dom";

const BookDetails = ({ params, books }) => {
  // const [questions, setQuestions] = useState([]);

  const book = books.find((elt) => elt.title === params.title);
  console.log({ books });

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "center",
        }}>
        <h2>{book?.title}</h2>
      </div>
      <div
        style={{
          color: "black",
          textAlign: "center",
        }}>
        <table>
          <tbody>
            <tr>
              <th>title</th>
              <td>{book?.title}</td>
            </tr>
            <tr>
              <th>Author</th>
              <td>{book?.author}</td>
            </tr>
            <tr>
              <th>number of pages</th>
              <td>{book?.pages}</td>
            </tr>
            <tr>
              <th>price</th>
              <td>{book?.price + "$"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookDetails;
