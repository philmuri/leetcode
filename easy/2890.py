import pandas as pd


def meltTable(df: pd.DataFrame) -> pd.DataFrame:
    return df.melt(id_vars=['product'], var_name='quarter', value_name='sales')
