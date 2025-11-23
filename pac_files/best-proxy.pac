function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.61.38.140:1080",
        "SOCKS 103.138.123.242:8082",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 45.166.93.113:999",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 164.163.42.26:10000",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 15.160.151.84:27147",
        "SOCKS 45.61.139.153:2525",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 103.148.112.69:8199",
        "SOCKS 223.25.110.37:8199",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}