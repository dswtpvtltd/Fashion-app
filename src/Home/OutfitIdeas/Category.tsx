import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { Box, Text, BorderlessTap } from "../../components";

const INNER_RADIUS = 30;
const OUTER_RADIUS = 34;

interface CategoryProps {
  id: string;
  title: string;
  color: string;
}

const Category = ({ title, color }: CategoryProps) => {
  const [selected, setSelected] = useState(false);
  return (
    <BorderlessTap onPress={() => setSelected((prev) => !prev)}>
      <Box marginLeft="m" marginTop="s" alignItems="center">
        <Box
          alignItems="center"
          width={OUTER_RADIUS * 2}
          height={OUTER_RADIUS * 2}
          justifyContent="center"
        >
          {selected && (
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: OUTER_RADIUS,
                borderColor: color,
                borderWidth: 1,
              }}
            />
          )}

          <View
            style={{
              width: INNER_RADIUS * 2,
              height: INNER_RADIUS * 2,
              borderRadius: INNER_RADIUS,
              backgroundColor: color,
            }}
          />
        </Box>
        <Text textAlign="center" marginTop="s">
          {title}
        </Text>
      </Box>
    </BorderlessTap>
  );
};

export default Category;
