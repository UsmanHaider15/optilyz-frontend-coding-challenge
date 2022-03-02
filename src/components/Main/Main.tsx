import { FunctionComponent } from "react";
import { Badge } from "../Badge";
import {
  StyledCard,
  StyledCardBody,
  StyledCardDescription,
  StyledCardDetails,
  StyledCardImage,
  StyledCardTitle,
} from "./StyledCard";
import StyledMain from "./StyledMain";
import { Data, Rating } from "../../types";

export interface Props {
  loading: boolean;
  error: string;
  data: Partial<Data>;
}

const allowedFields: string[] = [
  "Released",
  "Genre",
  "Director",
  "Write",
  "Actors",
  "Language",
  "Awards",
];

export const Main: FunctionComponent<Props> = ({ loading, error, data }) => {
  if (loading)
    return (
      <StyledMain>
        <Badge label="loading..." />
      </StyledMain>
    );
  if (error)
    return (
      <StyledMain>
        <Badge label={error} type="error" />
      </StyledMain>
    );

  if (Object.keys(data).length === 0)
    return (
      <StyledMain>
        <Badge label="No Movie" />
      </StyledMain>
    );

  return (
    <StyledMain>
      <StyledCard>
        <StyledCardImage src={data.Poster} />
        <StyledCardBody>
          <StyledCardTitle>{data.Title}</StyledCardTitle>
          <StyledCardDescription>{data.Plot}</StyledCardDescription>
          <StyledCardDetails>
            {Object.entries(data)
              .filter(([key]) => allowedFields.includes(key))
              .map(([key, value]) => (
                <div>
                  <span style={{ fontWeight: "bold" }}>{key}:</span> {value}
                </div>
              ))}

            <br />
            {data?.Ratings?.map((rating: Rating) => (
              <div>
                <span style={{ fontWeight: "bold" }}>{rating["Value"]}</span>{" "}
                {rating["Source"]}
              </div>
            ))}
          </StyledCardDetails>
        </StyledCardBody>
      </StyledCard>
    </StyledMain>
  );
};
