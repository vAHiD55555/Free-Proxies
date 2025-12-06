function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 163.172.131.178:16379",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 153.174.143.16:80",
        "SOCKS 103.195.65.254:8080",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 52.201.85.24:80",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 5.133.219.4:63434",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}