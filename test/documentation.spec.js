/*global unexpected*/
// THIS FILE IS AUTOGENERATED! DO NOT CHANGE IT MANUALLY.
// It is built based on the examples in the documentation folder
// when the documentation site gets build by running "make site-build".
it.skipIf = function (condition) {
    (condition ? it.skip : it).apply(it, Array.prototype.slice.call(arguments, 1));
};

describe("documentation tests", function () {
    var isBrowser = typeof weknowhow !== 'undefined';
    var isPhantom = typeof mochaPhantomJS !== 'undefined';
    var expect;
    beforeEach(function () {
        expect = unexpected.clone();
        expect.output.preferredWidth = 80;

    });

    it("assertions/messy.Headers/to-satisfy.md contains correct examples", function () {
        var testPromises = [];
        expect(new messy.Headers('foo: bar'), 'to satisfy', {
            Foo: 'bar'
        });

        try {
            expect(new messy.Headers('Quux: baz\r\nFoo: bar'), 'to satisfy', {
                Foo: undefined
            });
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(new messy.Headers('Quux: baz\\r\\nFoo: bar'), 'to satisfy', {").nl();
                output.code("    Foo: undefined").nl();
                output.code("});").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected\n" +
                "Quux: baz\n" +
                "Foo: bar\n" +
                "to satisfy { Foo: undefined }\n" +
                "\n" +
                "Quux: baz\n" +
                "Foo: bar // should be removed"
            );
        }

        expect(new messy.Headers({
            Foo: ['bar', 'quux']
        }), 'to satisfy', {
            Foo: 'bar'
        });

        try {
            expect(new messy.Headers({
                Foo: 'bar'
            }), 'to satisfy', {
                Foo: ['quux', 'bar']
            });
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(new messy.Headers({").nl();
                output.code("    Foo: 'bar'").nl();
                output.code("}), 'to satisfy', {").nl();
                output.code("    Foo: ['quux', 'bar']").nl();
                output.code("});").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected Foo: bar to satisfy { Foo: [ 'quux', 'bar' ] }\n" +
                "\n" +
                "Foo: bar\n" +
                "// missing Foo: quux"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/messy.HttpRequest/to-satisfy.md contains correct examples", function () {
        var testPromises = [];
        try {
            var httpRequest = new messy.HttpRequest(
                'GET /foo HTTP/1.1\n' +
                'Content-Type: text/plain; charset=UTF-8\n' +
                'Content-Length: 13\n' +
                '\n' +
                'Hello, world!'
            );

            expect(httpRequest, 'to satisfy', {
                method: 'POST',
                headers: {
                    Foo: 'bar',
                    'Content-Length': 13
                },
                body: /Hi/
            });
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("var httpRequest = new messy.HttpRequest(").nl();
                output.code("    'GET /foo HTTP/1.1\\n' +").nl();
                output.code("    'Content-Type: text/plain; charset=UTF-8\\n' +").nl();
                output.code("    'Content-Length: 13\\n' +").nl();
                output.code("    '\\n' +").nl();
                output.code("    'Hello, world!'").nl();
                output.code(");").nl();
                output.code("").nl();
                output.code("expect(httpRequest, 'to satisfy', {").nl();
                output.code("    method: 'POST',").nl();
                output.code("    headers: {").nl();
                output.code("        Foo: 'bar',").nl();
                output.code("        'Content-Length': 13").nl();
                output.code("    },").nl();
                output.code("    body: /Hi/").nl();
                output.code("});").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected\n" +
                "GET /foo HTTP/1.1\n" +
                "Content-Type: text/plain; charset=UTF-8\n" +
                "Content-Length: 13\n" +
                "\n" +
                "Hello, world!\n" +
                "to satisfy\n" +
                "{\n" +
                "  method: 'POST', headers: { Foo: 'bar', 'Content-Length': 13 },\n" +
                "  body: /Hi/\n" +
                "}\n" +
                "\n" +
                "GET /foo HTTP/1.1 // should be POST\n" +
                "                  //\n" +
                "                  // -GET /foo HTTP/1.1\n" +
                "                  // +POST / HTTP/1.1\n" +
                "Content-Type: text/plain; charset=UTF-8\n" +
                "Content-Length: 13\n" +
                "// missing Foo: bar\n" +
                "\n" +
                "Hello, world! // should match /Hi/"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/messy.HttpResponse/to-satisfy.md contains correct examples", function () {
        var testPromises = [];
        try {
            var httpResponse = new messy.HttpResponse({
                headers: {
                    'Content-Type': 'image/png'
                },
                body: require('fs').readFileSync('node_modules/unexpected/node_modules/magicpen/images/magic-pen-6-colours.jpg')
            });

            expect(httpResponse, 'to satisfy', { headers: { 'Content-Type': 'image/gif' } });
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("var httpResponse = new messy.HttpResponse({").nl();
                output.code("    headers: {").nl();
                output.code("        'Content-Type': 'image/png'").nl();
                output.code("    },").nl();
                output.code("    body: require('fs').readFileSync('node_modules/unexpected/node_modules/magicpen/images/magic-pen-6-colours.jpg')").nl();
                output.code("});").nl();
                output.code("").nl();
                output.code("expect(httpResponse, 'to satisfy', { headers: { 'Content-Type': 'image/gif' } });").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected\n" +
                "\n" +
                "Content-Type: image/png\n" +
                "\n" +
                "Buffer[13509] (image/png)\n" +
                "to satisfy { headers: { 'Content-Type': 'image/gif' } }\n" +
                "\n" +
                "\n" +
                "Content-Type: image/png // should equal image/gif\n" +
                "                        //\n" +
                "                        // -image/png\n" +
                "                        // +image/gif\n" +
                "\n" +
                "Buffer[13509] (image/png)"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("index.md contains correct examples", function () {
        var testPromises = [];
        try {
            expect(new messy.HttpResponse(
                'HTTP/1.1 200 OK\r\n' +
                'Content-Type: application/json\r\n' +
                '\r\n' +
                '{"foo":"bar","baz":456}'
            ), 'to satisfy', {statusCode: 404, body: {baz: expect.it('to be greater than', 1024)}});
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(new messy.HttpResponse(").nl();
                output.code("    'HTTP/1.1 200 OK\\r\\n' +").nl();
                output.code("    'Content-Type: application/json\\r\\n' +").nl();
                output.code("    '\\r\\n' +").nl();
                output.code("    '{\"foo\":\"bar\",\"baz\":456}'").nl();
                output.code("), 'to satisfy', {statusCode: 404, body: {baz: expect.it('to be greater than', 1024)}});").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected\n" +
                "HTTP/1.1 200 OK\n" +
                "Content-Type: application/json\n" +
                "\n" +
                "{ foo: 'bar', baz: 456 }\n" +
                "to satisfy { statusCode: 404, body: { baz: expect.it('to be greater than', 1024) } }\n" +
                "\n" +
                "HTTP/1.1 200 OK // should be 404 Not Found\n" +
                "                //\n" +
                "                // -HTTP/1.1 200 OK\n" +
                "                // +HTTP/1.1 404 Not Found\n" +
                "Content-Type: application/json\n" +
                "\n" +
                "{\n" +
                "  foo: 'bar',\n" +
                "  baz: 456 // should be greater than 1024\n" +
                "}"
            );
        }
        return expect.promise.all(testPromises);
    });
});
