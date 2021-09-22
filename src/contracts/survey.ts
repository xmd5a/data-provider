export type PostSurveyAnswerPayload = {
  answer_index: number | null;
  answer_text: string;
  answer_time: string;
  answer_time_zone: string;
  ask_time: string;
  question_id: string;
};

export type PostSurveyAnswerResponse = null;
