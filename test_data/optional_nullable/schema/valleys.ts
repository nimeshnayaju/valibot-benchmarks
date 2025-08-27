import { object, or, string, undefined_, null_, number, array } from "valleys";

const valleysSchema = () => {
  const ContentJsonSchema = object({
    id: or([string(), null_(), undefined_()]),
    title: or([string(), null_(), undefined_()]),
    version: or([number(), string(), null_(), undefined_()]),
  });

  const AnswerJsonSchema = object({
    key: or([string(), null_(), undefined_()]),
    value: or([object({ anyvalue: string() }), null_(), undefined_()]),
  });

  const ResultJsonSchema = object({
    key: or([string(), null_(), undefined_()]),
    value: or([object({ anyvalue: string() }), null_(), undefined_()]),
  });
  const EntryJsonSchema = object({
    a: or([string(), null_(), undefined_()]),
    b: or([string(), null_(), undefined_()]),
    id: or([string(), null_(), undefined_()]),
    creation: or([string(), null_(), undefined_()]),
    content: or([ContentJsonSchema, null_(), undefined_()]),
    labels: or([array(string()), null_(), undefined_()]),
    answers: or([array(AnswerJsonSchema), null_(), undefined_()]),
    results: or([array(ResultJsonSchema), null_(), undefined_()]),
  });

  return EntryJsonSchema;
};

export default valleysSchema();
