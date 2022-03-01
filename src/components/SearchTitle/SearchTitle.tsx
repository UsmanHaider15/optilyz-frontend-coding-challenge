import { FormEvent, FunctionComponent, useState } from "react";
import { getUrl } from "../../services/httpService";
import { Button } from "../common/Button";
import { StyledInput } from "../Styled";

export interface Props {
  onSetUrl: (description: string) => void;
}

export const SearchTitle: FunctionComponent<Props> = ({ onSetUrl }) => {
  const [titleText, setTitleText] = useState("");

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    onSetUrl(getUrl(titleText));
  };

  return (
    <form className="Form" onSubmit={handleSubmit} style={{ marginTop: 10 }}>
      <StyledInput
        onChange={(event: any) => setTitleText(event.target.value)}
        value={titleText}
        placeholder="Search Title"
      />

      <Button>Search</Button>
    </form>
  );
};