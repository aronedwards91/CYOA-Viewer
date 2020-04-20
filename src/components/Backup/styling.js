import React, { useState } from "react";
import styled from "styled-components";
import Col from "../data/colors.json";

export const Strings = {
  backup: "Backup",
  import: "Import",
  importTrigger: "Import Data",
  backupGuide: "Copy & save string below, or ",
  backupDownload: "Download .JSON file",
  backupFileImport: "Import file",
  importGuide:
    "Paste in string from backup(if file, open file, extract text) & click =>   ",
  importNote: "Note: A successfull import will refresh page.",
};

export const Container = styled.div`
  text-align: center;
  bottom: 0;
`;

export const ButtonStyled = styled.button`
  border-radius: 5px;
  border: 1px solid ${Col.main.darker};
  background: transparent;
  padding: 4px 12px;
  cursor: pointer;
  outline: none;

  &:hover {
    background: ${Col.main.lighter};
  }
`;

export const HorizPad = styled.span`
  padding: 0 20px;
`;

export const TextOutput = styled.div`
  min-width: 320px;
  border: 1px solid ${Col.main.darker};
  border-radius: 5px;
  background: ${Col.main.light};
  margin: 24px 80px;
  padding: 24px 12px;
`;
export const LongTextWrap = styled.span`
  white-space: -moz-pre-wrap !important; /* Mozilla, since 1999 */
  white-space: -webkit-pre-wrap; /* Chrome & Safari */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  white-space: pre-wrap; /* CSS3 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
  word-break: break-all;
  white-space: normal;
`;

export const EditableSpan = ({ onChange, value }) => {
  const rows = value.length / 100 + 3;
  return <TextInput onChange={onChange} value={value} rows={rows} />;
};

export const TextInput = styled.textarea`
  width: 540px;
  border: 1px solid ${Col.main.darker};
  border-radius: 5px;
  background: ${Col.main.light};
  margin: 24px 80px;
  padding: 24px 12px;
`;
