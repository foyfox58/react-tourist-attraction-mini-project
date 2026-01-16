const TagList = ({ tags = [], onTagClick }) => {
    return (
      <div className="flex flex-wrap items-center gap-1 text-sm">
        <span className="text-gray-600">หมวด</span>
  
        {tags.map((tag, index) => (
          <span key={tag}>
            <a
              href="#"
              className="text-blue-600 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                onTagClick(tag);
              }}
            >
              {tag}
            </a>
  
            {index < tags.length - 1 && (
              <span className="text-gray-600">, </span>
            )}
          </span>
        ))}
      </div>
    );
  };
  
  export default TagList;
  