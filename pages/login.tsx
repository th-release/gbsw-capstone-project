/* eslint-disable react-hooks/rules-of-hooks */
import Head from '../components/head'
import Link from 'next/link'
import classnames from 'classnames'

import Account from '../styles/Account.module.css'
import React, { useState } from 'react'
import Router, { useRouter } from 'next/router'

export default function login() {
	const router = useRouter()
	const [values, setValues] = useState({ id: '', password: '', error_Message: '' })
  async function handleSubmit(e: any) {
		e.preventDefault()
		const res = await fetch('/active?type=login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: values.id,
				pw: values.password
			})
		}).then((res) => res.json())
		if (res.Success) {
			document.cookie = 'token=' + res.token
			return router.push('/')
		} else {
			return setValues({ id: '', password: '', error_Message: res.message })
		}
	}
	return (
		<div className={Account.body}>
			<Head title="Future Farm 로그인" />
			<div className={classnames(Account.site, Account.sitefull)}>
				<header className={classnames(Account.bannerShape, Account.banner, Account.bannerFullPage)}>
					<div className={Account.container}>
						<div className={Account.bannerBrand}>
							<Link href={'/'} passHref>
								<h1 className={Account.title}>Future Farm</h1>
							</Link>
						</div>
						<div className={Account.bannerContent}>
							<div className={classnames(Account.Content, Account.margin_x_auto)}>
								<div className={classnames(Account.box, Account.boxAuth)}>
									<div className={Account.boxContent}>
										<h1 className={classnames(Account.mp_0, Account.black, Account.titleBox)}>Make Future</h1>
										{values.error_Message != ''?
											<div className={Account.error_message}>
												{values.error_Message}
											</div>
											:
											""
										}
										<form className={Account.form} onSubmit={handleSubmit}>
											<div className={classnames(Account.formGroup, Account.inputGroup, Account.isFocus)}>
												<span className={Account.icon}>
													{/* icon */}
												</span>
												<input className={Account.formControl} value={values.id} name="id" type="text" placeholder="아이디" required onChange={(e) => setValues({ id: e.target.value, password: values.password, error_Message: values.error_Message })}/>
											</div>
											<div className={classnames(Account.formGroup, Account.inputGroup, Account.isFocus)}>
												<span className={Account.icon}>
													{/* icon */}
												</span>
												<input className={Account.formControl} value={values.password	} name="password" type="password" placeholder="비밀번호" required onChange={(e) => setValues({ id: values.id, password: e.target.value, error_Message: values.error_Message })}/>
											</div>
											<div style={{height: '25px', width: '100%'}}></div>
											{/* g-recaptch */}
											{/* <hr className={Account.hr}/> */}
											<div className={Account.formAction}>
												<div className={classnames(Account.p3, Account.textCenter, Account.m_t_24px)}>
													<input type={'submit'} className={classnames(Account.btn, Account.btnBlock, Account.btnPrimary)} value="로그인" />
													<br/><br/>
												</div>
											</div>
										</form>
									</div>
								</div>
								<br/>
							</div>
						</div>
					</div>
					<div className={Account.bannerBackground}>
					</div>
				</header>
			</div>
		</div>
	)
}