import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div>
            <Form>
                <input type="text" placeholder="your password" name="text" required />
                <button type="submit" class="button-dark">
                    send password
                </button>
            </Form>
        </div>
    );
});