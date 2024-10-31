import { Button, Flex, Input, Stack } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { Field } from "../ui/field"

interface FormValues {
    email: string
    password: string
}

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>()

    const onSubmit = handleSubmit((data) => console.log(data))
    return (
        <>
            <form onSubmit={onSubmit}>
                <Stack gap="4" align="flex-start" maxW="sm">
                    <Field
                        label="Email"
                        invalid={!!errors.email}
                        errorText={errors.email?.message}
                    >
                        <Input
                            {...register("email", { required: "First name is required" })}
                        />
                    </Field>
                    <Field
                        label="Password"
                        invalid={!!errors.password}
                        errorText={errors.password?.message}
                    >
                        <Input
                            {...register("password", { required: "Last name is required" })}
                        />
                    </Field>
                    <Button type="submit">Submit</Button>
                </Stack>
            </form>
        </>
    )
}

export default Login