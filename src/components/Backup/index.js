import React, { useState } from "react";
import { getBackupDataStr, importBackupString } from "../userData";
import { getBackupFile } from "../userData/filemaker";
import { getBackupFromFile } from "../userData/filegetter";
import { RedX } from "../StyledItems";
import {
  Strings,
  Container,
  ButtonStyled,
  HorizPad,
  TextOutput,
  EditableSpan,
  LongTextWrap,
} from "./styling.js";

const Backup = () => {
  const [showbackupString, setbackup] = useState(false);
  const [showImportBox, setImport] = useState(false);
  const [importData, setImportData] = useState("");
  const importFileID = "selectFilesID";

  const backupClick = () => {
    showbackupString ? setbackup(false) : setbackup(getBackupDataStr);
    setImport(false);
  };
  const showImportClick = () => {
    setImport(!showImportBox);
    setbackup(false);
  };
  const updateImportInput = (e) => {
    setImportData(e.target.value);
  };
  const runImport = () => {
    importBackupString(importData);
    window.location.reload();
  };
  const uploadFile = () => {
    getBackupFromFile(importFileID);
    window.location.reload();
  };

  return (
    <Container>
      <div>
        <ButtonStyled onClick={backupClick}>
          {Strings.backup} {showbackupString && <RedX />}
        </ButtonStyled>
        <HorizPad>-</HorizPad>
        <ButtonStyled onClick={showImportClick}>
          {Strings.import} {showImportBox && <RedX />}
        </ButtonStyled>
      </div>
      <div>
        {showbackupString && (
          <TextOutput>
            {Strings.backupGuide}
            <ButtonStyled onClick={getBackupFile}>
              {Strings.backupDownload}
            </ButtonStyled>
          </TextOutput>
        )}
        {showbackupString && (
          <TextOutput>
            <LongTextWrap>{showbackupString}</LongTextWrap>
          </TextOutput>
        )}

        {showImportBox && (
          <TextOutput>
            {Strings.importGuide}{" "}
            <ButtonStyled onClick={runImport}>
              {Strings.importTrigger}
            </ButtonStyled>
            {" or "}
            <br />
            <input type="file" id={importFileID} />
            <ButtonStyled onClick={uploadFile}>
              {Strings.backupFileImport}
            </ButtonStyled>
            <div>{Strings.importNote}</div>
          </TextOutput>
        )}
        {showImportBox && (
          <EditableSpan onChange={updateImportInput} value={importData} />
        )}
      </div>
    </Container>
  );
};

export default Backup;
