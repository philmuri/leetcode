import pandas as pd


def selectData(st: pd.DataFrame) -> pd.DataFrame:
    return st.loc[st['student_id'] == 101, ['name', 'age']]
