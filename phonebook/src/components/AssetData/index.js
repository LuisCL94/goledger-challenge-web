import React from "react";
import {  FaEye, FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

import { Button } from "@material-ui/core";
import { Options } from "./styles";

export default function AssetData(props) {
  return props.assetData.map(r => (
    <li key={r.name}>
      <span>{r.name}</span>

      <Options>
        <Button>
          <FaEye size={25} />
        </Button>
        <Button >
          <MdEdit size={25} />
        </Button>
        <Button >
          <FaTrashAlt size={20} />
        </Button>
      </Options>

    </li>
  ));
}


