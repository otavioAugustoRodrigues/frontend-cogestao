import { createGlobalStyle } from 'styled-components';

export const PrimereactStyles = createGlobalStyle`
  .p-inputtext {
    color: white;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .p-dropdown-trigger-icon {
    color: white;
  }
  .p-dropdown-item-label {
    color: white;
  }
  .p-dropdown-items-wrapper {
    border: solid 2px white;
  }
`;
