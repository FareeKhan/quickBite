import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';

const BottomSheetComponent = ({
  Component,
  onPressMenu,
  HEIGHT,
  setClose,
  BGSheetColor,
  marginBottom
}) => {
  const refRBSheet = useRef();

  React.useEffect(() => {
    refRBSheet.current.open();
  });

  setClose ? refRBSheet.current.close() : null;

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      openDuration={60}
      closeOnPressMask={true}
      onClose={onPressMenu}
      animationType="slide"
      customStyles={{
        wrapper: {
          backgroundColor: '#121419100',
        },
        container: {
          backgroundColor: BGSheetColor,
          borderRadius: 15,
          height: HEIGHT ? HEIGHT : 320,
          width: '92%',
          alignSelf: 'center',
          marginBottom: marginBottom,
        },
      }}>
      <Component />
    </RBSheet>
  );
};

export default BottomSheetComponent;
