function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.139.112:5566",
        "SOCKS 110.235.246.243:1080",
        "SOCKS 36.255.98.160:9980",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 194.87.10.65:1234",
        "SOCKS 130.110.250.13:1111",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 34.96.238.40:8080",
        "SOCKS 159.8.114.37:80",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 128.140.113.110:3128",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 37.59.112.197:80",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 201.139.115.206:8081",
        "SOCKS 144.91.95.238:58237",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}