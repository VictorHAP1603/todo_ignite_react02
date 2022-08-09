import styled from 'styled-components';

export const Container = styled.main`
    height: 100%;
    background-color: var(--gray-600);


    form {
        display: grid;
        grid-template-columns: 1fr 90px;
        column-gap: 8px;
        transform: translateY(-50%);
        margin-bottom: 83px;

        input {
            padding: 16px;
            font-size: 1.6rem;
            border-radius: 8px;
            background-color: var(--gray-500);
            border: none;
            color: var(--gray-100);
            outline: 1px solid var(--gray-700);
        }

        button {
            border-radius: 8px;
            outline: 1px solid var(--gray-700);
            background-color: var(--dark-blue);

            color: var(--gray-100);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            transition: all .4s;

            svg {   
                margin-left: 8px;
                stroke-width: 0.5px;
            }
            
        }
    }

    .todo__list {
        .todo__list__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 24px;

            p {
                font-size: 1.4rem;
                font-weight: bold;
                
                span {
                    font-size: 1.2rem;
                    color: var(--gray-100);
                    padding: 2px 8px;
                    background-color: var(--gray-400);
                    border-radius: 50%;
                    display: inline-block;
                    margin-left: 8px;
                }
            }

            .todo__total__count {
                p {
                    color: var(--blue);
                }
            }

            .todo__total__completed {
                p {
                    color: var(--purple);
                }
            }
        }

        .todo__list__body {
            .todo__list__body__item__none {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-top: 1px solid var(--gray-400);
                border-radius: 8px 8px 0 0;
                padding: 64px 0;

                img {
                    margin-bottom: 16px;
                }

                p {
                    font-size: 1.6rem;
                    color: var(--gray-300);
                    font-weight: bold;
                    line-height: 2.24rem;

                    &:last-child {
                        font-weight: normal;
                    }
                }
            }

            .todo__item {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;

                padding: 16px 20px;
                background-color: var(--gray-500);
                outline: 1px solid var(--gray-400);
                border-radius: 8px;
                height: auto;

                button {
                    background: none;
                    border: none;

                }

                .todo__item__left {
                    display: grid;
                    align-items: flex-start;
                    grid-template-columns: 20px 1fr;
                    column-gap: 12px;
                    width: 90%;
                    word-break: break-all;

                    button {
                        margin-right: 12px;
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        /* background-color: var(--gray-500); */
                        border: 2px solid var(--blue);
                        /* background-color: red; */

                        span {
                            opacity: 0;
                            transition: all .4s;
                        }
                    }

                    p {
                        font-size: 1.4rem;
                        color: var(--gray-100);
                        line-break: auto;
                        /* text-overflow: ''; */
                    }

                }

                .todo__item__right {


                    button {
                        svg {
                            color: var(--gray-300);
                            transition: all .4s;
                        }

                        &:hover {
                            svg {
                                color: var(--danger);
                            }
                        }
                    }
                }

                &.active {
                    .todo__item__left {
                        button {
                            background: var(--dark-purple);
                            border: 2px solid var(--dark-purple);
                            position: relative;

                          span {
                            color: var(--gray-100);
                            opacity: 1;
                          }
                        }

                        p {
                            color: var(--gray-300);
                            text-decoration: line-through;
                        }
                    }
                }

                & + .todo__item {
                    margin-top: 12px;
                }
            }
        }
    }
`