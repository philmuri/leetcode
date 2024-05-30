import pandas as pd


def fillMissingValues(df: pd.DataFrame) -> pd.DataFrame:
    df['quantity'] = df['quantity'].fillna(0)
    return df
