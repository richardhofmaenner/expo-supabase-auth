import { View } from "react-native"

enum SpacerSize {
  "XS" = 4,
  "S" = 8,
  "M" = 16,
  "L" = 24,
  "XL" = 32,
}

interface SpacerProps {
  size: SpacerSize
}

const Spacer = (props: SpacerProps) => {
  return (
    <View
      style={{
        height: props.size,
      }}
    >

    </View>
  )
}

export default Spacer