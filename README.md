# В данном коде реализован шифр Цезаря. 
# Он основан на замене каждой буквы в открытом тексте на другую букву, расположенную на фиксированном количестве позиций вниз или вверх по алфавиту.
# Основные функции кода:
1. encrypt():Зашифровывает текст с использованием функции caesarCipher и заданного ключа.
2. decrypt(): Производит обратное преобразование (дешифрование) текста, используя тот же метод шифрования, но со знаком минус для ключа.
3. generateKey(): Генерирует случайный ключ в диапазоне от 1 до 32 и записывает его в элемент "key".
4. crack(): Проводит атаку на шифр путем перебора всех возможных ключей от 1 до 32 и для каждого ключа выводит расшифрованный текст.
5. caesarCipher(text, shift):Основная функция шифрования и дешифрования, которая использует параметр сдвига для преобразования символов.
Поддерживаются только русские буквы (как верхнего, так и нижнего регистра).
Методика, используемая в функции crack(), основана на переборе всех возможных ключей шифра.
Поскольку шифр Цезаря имеет ограниченное количество возможных ключей (в данном случае от 1 до 32), 
такая методика позволяет получить все возможные расшифрованные варианты текста.
