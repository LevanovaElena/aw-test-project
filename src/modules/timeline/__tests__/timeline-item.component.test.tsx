import React from 'react';
import { render, screen } from '@testing-library/react';
import {TimeLineItem} from "../timeline-item.component";
import {mockTimeLineItem2} from "../../../__mocks__/trips.mocs";
import {getShortTime} from "../../common/utils";

describe("TimeLineItem tests", () => {
  const {arrivalTime, departureTime, arrCode, depCode} = mockTimeLineItem2;
  beforeEach(() => {
    render(<TimeLineItem timeLineItem={mockTimeLineItem2}/>);
  })
  afterAll(() => {
    jest.clearAllMocks();
  })
  test('renders block arrival time', () => {
    expect(screen.getByText(getShortTime(arrivalTime))).toBeInTheDocument();
  });

  test('renders block departure time', () => {
    expect(screen.getByText(getShortTime(departureTime))).toBeInTheDocument();
  });

  test('renders block departure code', () => {
    expect(screen.getByText(depCode)).toBeInTheDocument();
  });
  test('renders block arrival code', () => {
    expect(screen.getByText(arrCode)).toBeInTheDocument();
  });
  test('renders block description', () => {
    expect(screen.getByTestId('description')).toBeInTheDocument();
  });
});
