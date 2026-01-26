function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.51:5719",
        "SOCKS 119.81.71.27:80",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 62.133.62.12:1082",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 36.255.98.163:5044",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 221.202.27.194:10806",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 18.141.177.23:80",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 27.153.141.90:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}