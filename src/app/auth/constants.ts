export const EMAIL_PATTERN = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
export const NUMBERS_PATTERN = '^-?[0-9]+$';
export const DOUBLE_PATTERN = '[+-]?([0-9]*[.])?[0-9]+';
export const NAME_PATTERN = '[A-Z][a-z][^1-9]{1,10}';
export const PASSWORD_PATTERN = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&-]{8,}$';