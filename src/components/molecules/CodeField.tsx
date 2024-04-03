import {Text} from '@components/atoms/Text';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

type Props = {
  onChange(t: string): void;
};

const CodeInput = ({onChange}: Props) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.root}>
      <Text variant="subtitle" custom="text-white/80 text-center text-xl mb-4">
        Informe seu código
      </Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={t => {
          onChange(t), setValue(t);
        }}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {padding: 20},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    color: '#FFF',
    lineHeight: 38,
    fontSize: 24,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 5,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#FFF',
  },
});

export default CodeInput;
