import { Link } from "react-router-dom";
import "../styles/document-list.css";
import { Eye } from "lucide-react";

function DocumentList({ documents }) {
  if (documents.length === 0) {
    return (
      <div className="empty-state">
        <p>📄 No documents yet.</p>
        <p>Upload one to get started!</p>
      </div>
    );
  }

  return (
    <div className="documents-grid">
      {documents.map((doc) => (
        <div key={doc._id} className="document-card">
          <div className="document-header">
            <h3>{doc.title}</h3>
          </div>

          <div className="document-body">
            <div className="flex justify-between">
              <p className="description">{doc.owner.name}</p>
              <p className="description">{new Date(doc.createdAt).toLocaleDateString() || "00/00/0000"}</p>
            </div>

            <div className="document-info">
              <span>📄 {doc.pages || 1} pages</span>
              <span>💾 {(doc.fileSize / 1024 / 1024).toFixed(2)} MB</span>
            </div>
          </div>

          <div className="document-footer">
            <Link to={`/viewer/${doc._id}`} className="btn-view flex gap-1 justify-center">
              <Eye />
              View Document
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DocumentList;
