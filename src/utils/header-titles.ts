import { IDocument } from "./constants/header.constants";

export const updateDocumentDescription = (metadata: IDocument) => {
    // Check if a meta description tag already exists
    let metaDescription = document.querySelector("meta[name='description']") as HTMLMetaElement;
    let metaKeywords = document.querySelector("meta[name='keywords']") as HTMLMetaElement;
  
    if (!metaDescription) {
      // If not, create one
      metaDescription = document.createElement("meta") as HTMLMetaElement;
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
  
    if (!metaKeywords) {
      // If not, create one
      metaKeywords = document.createElement("meta") as HTMLMetaElement;
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
  
    // Update the content of the meta description and keywords
    metaDescription.content = metadata.description;
    metaKeywords.content = metadata.keywords;
  };
  