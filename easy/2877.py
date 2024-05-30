import pandas as pd


def createDataframe(student_data: List[List[int]]) -> pd.DataFrame:
    column_names = ['student_id', 'age']
    df = pd.DataFrame(data=student_data, columns=column_names)
    return df
