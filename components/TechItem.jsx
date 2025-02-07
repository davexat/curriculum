function TechItem({ isMini = false, url, imageUrl, name }) {
    return (
      <div className={isMini ? "mini-tech" : "tech-item"}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} alt={name} />
          <p className={isMini ? "mini-tech-text" : "tech-text"}>{name}</p>
        </a>
      </div>
    );
  }
  
  export default TechItem;
