function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 80.253.246.238:6618",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 123.54.197.51:20461",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 138.124.117.139:31645",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 65.108.203.36:18080",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 58.187.104.67:1082",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 45.168.244.16:8080",
        "SOCKS 72.10.160.170:6303",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 217.76.245.80:999",
        "SOCKS 58.187.104.67:1081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}