import { useQuery, DocumentNode } from "@apollo/client";

export const useSelectorQuery = ({ selectQuery: DocumentNode, variables }) => {
  const { loading, error, data } = useQuery(selectQuery, { variables });
  return { loading, error, data };
};
