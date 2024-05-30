import pandas as pd


def dropDuplicateEmails(df: pd.DataFrame) -> pd.DataFrame:
    return df.drop_duplicates(subset=['email'])
